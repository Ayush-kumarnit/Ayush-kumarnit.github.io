with open('page-chunk.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find roles
matches = re.findall(r'\["[^"]*",\s*"[^"]*",\s*"[^"]*"\]', text)
for m in matches[:10]:
    print("Match:", m)

idx = text.find('hero-role')
if idx != -1:
    print('Hero role context:', text[idx-100:idx+600])

idx = text.find('Lounge')
if idx != -1:
    print('Lounge context:', text[idx-100:idx+400])

idx = text.find('Visitors')
if idx != -1:
    print('Visitors context:', text[idx-100:idx+600])
