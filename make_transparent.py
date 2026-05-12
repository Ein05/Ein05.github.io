from PIL import Image
import sys

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if the pixel is close to black (e.g., R, G, B are all less than 50)
        # The generated image might have some compression artifacts, so we use a threshold.
        # Alternatively, we can use the intensity of the pixel as the alpha channel, 
        # while setting the RGB to the target cyan color (e.g. 0, 150, 255)
        
        # Let's use the luminance as the alpha channel to preserve anti-aliasing
        r, g, b, a = item
        luminance = (r * 0.299 + g * 0.587 + b * 0.114)
        
        # We want the blue lines. We can just keep the original color but change alpha based on luminance
        # This makes black (luminance 0) fully transparent, and bright lines opaque
        # Give it a nice neon yellow-green accent color (#c8f135)
        accent_r, accent_g, accent_b = 200, 241, 53
        
        # Map luminance to alpha (0-255)
        # If luminance is high, alpha is high.
        alpha = int((luminance / 255.0) * 255)
        
        # We can apply a power curve to alpha to make the background cleaner
        # and lines more solid.
        alpha_factor = (luminance / 255.0) ** 1.5
        alpha = int(alpha_factor * 255)
        
        # Clamp alpha
        alpha = max(0, min(255, alpha))
        
        # Give it the accent color
        newData.append((accent_r, accent_g, accent_b, alpha))
        
    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    make_transparent(sys.argv[1], sys.argv[2])
