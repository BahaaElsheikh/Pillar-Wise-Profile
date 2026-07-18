import os
import fitz  # PyMuPDF

def extract_images_from_pdf():
    # Prompt the user for the PDF file path
    pdf_path = input("Enter the PDF file path (e.g., document.pdf): ").strip()
    
    # Check if the specified file actually exists
    if not os.path.exists(pdf_path):
        print("❌ Error: File not found! Please check the path.")
        return

    # Prompt the user for the output folder name
    output_folder = input("Enter the destination folder name for images: ").strip()

    # Create the output directory if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        print(f"📁 Created folder: {output_folder}")

    try:
        # Open the PDF document
        pdf_file = fitz.open(pdf_path)
        image_count = 0

        # Iterate through each page of the PDF
        for page_num in range(len(pdf_file)):
            page = pdf_file[page_num]
            image_list = page.get_images(full=True)

            # Extract each image found on the current page
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = pdf_file.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]  # Image extension (e.g., png, jpeg)

                # Format the image name based on page number and index
                image_name = f"page_{page_num + 1}_img_{img_index + 1}.{image_ext}"
                image_path = os.path.join(output_folder, image_name)

                # Write the image bytes to the destination file
                with open(image_path, "wb") as img_file:
                    img_file.write(image_bytes)
                
                image_count += 1

        print("---")
        if image_count > 0:
            print(f"🎉 Success! Extracted {image_count} images into '{output_folder}'.")
        else:
            print("ℹ️ No images found in this PDF file.")

    except Exception as e:
        print(f"❌ An error occurred during extraction: {e}")

if __name__ == "__main__":
    extract_images_from_pdf()