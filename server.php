<?php
$request = trim($_SERVER['REQUEST_URI'], '/');

// Prevent directory traversal
$request = str_replace(['../', './', '..\\', '.\\'], '', $request);

// Special cases
$routes = [
    'event' => 'Events.html',
    ''      => 'index.html',
    'index' => 'index.html'
];

$file = $routes[$request] ?? $request;
$ext = pathinfo($file, PATHINFO_EXTENSION);

// Default to .html if no extension is provided
if (!$ext) {
    $file .= '.html';
}

// Allowed file types with MIME types
$mime_types = [
    'html' => 'text/html',
    'css'  => 'text/css',
    'js'   => 'application/javascript',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'webp' => 'image/webp',
    'gif'  => 'image/gif',
    'svg'  => 'image/svg+xml',
    'json' => 'application/json'
];

// Serve file if it exists and is a valid type
if (file_exists($file) && isset($mime_types[$ext])) {
    header("Content-Type: " . $mime_types[$ext]);
    readfile($file);
} else {
    // Log only 404 errors (ignoring favicon requests)
    if ($request !== 'favicon.ico') {
        error_log("[Error] 404: $request - " . date("Y-m-d H:i:s") . "\n", 3, "error.log");
    }

    http_response_code(404);
    if (file_exists('404.html')) {
        readfile('404.html');
    } else {
        echo "404 Not Found";
    }
}
?>
