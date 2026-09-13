import os
import re

def update_html(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Favicon replacement
    new_fav = '<link rel="icon" type="image/svg+xml" href="/favicon.svg"/><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/><link rel="shortcut icon" href="/favicon.ico"/><link rel="apple-touch-icon" href="/apple-touch-icon.png"/>'
    
    # Remove existing favicon links
    content = re.sub(r'<link[^>]*rel="[^"]*icon[^"]*"[^>]*>', '', content)
    content = re.sub(r'<link[^>]*href="[^"]*favicon[^"]*"[^>]*>', '', content)
    
    # Insert new favicons before </head>
    content = content.replace('</head>', new_fav + '</head>')

    # Replace footer logo with logo-white.svg
    content = content.replace('src="/logo.svg" loading="lazy" class="footer__logo-img"', 'src="/logo-white.svg" loading="lazy" class="footer__logo-img"')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Successfully updated {path}')

update_html('x:/Project-Buildings/3d-website/frontend/public/index.html')
update_html('x:/Project-Buildings/3d-website/frontend/components/index.html')
