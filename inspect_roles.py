with open('page-chunk.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('analytics-drawer')
if idx != -1:
    print('ANALYTICS CONTEXT:', text[max(0, idx-200):min(len(text), idx+1500)])

idx2 = text.find('NEW')
if idx2 != -1:
    print('NEW/OLD TOGGLE CONTEXT:', text[max(0, idx2-200):min(len(text), idx2+500)])
