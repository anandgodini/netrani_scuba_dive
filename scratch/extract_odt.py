import zipfile
import xml.etree.ElementTree as ET

odt_path = r"C:/Users/Reddy ManiDeep/.gemini/antigravity/brain/50733ebb-8788-4098-9455-bdd307572514/.user_uploaded/media_1795442270414_d06fb41c.odt"

with zipfile.ZipFile(odt_path) as z:
    with z.open("content.xml") as f:
        tree = ET.parse(f)
        root = tree.getroot()

paragraphs = []
for elem in root.iter():
    tag = elem.tag.split('}')[-1]
    if tag in ['p', 'h']:
        text = "".join(elem.itertext()).strip()
        if text:
            # Also preserve heading level if available
            level = elem.attrib.get('{urn:oasis:names:tc:opendocument:xmlns:text:1.0}outline-level', '')
            if tag == 'h':
                paragraphs.append(f"[HEADING {level}] {text}")
            else:
                paragraphs.append(text)

with open(r"scratch/extracted_blog.txt", "w", encoding="utf-8") as out:
    out.write("\n\n".join(paragraphs))

print(f"Extracted {len(paragraphs)} elements.")
for p in paragraphs[:10]:
    print("-", p[:120])
