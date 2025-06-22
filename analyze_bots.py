import json
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Load the JSON data
with open('bots_ideas.json', 'r') as f:
    data = json.load(f)

# Convert to pandas DataFrame
df = pd.DataFrame(data)

# Count the number of bots in each category
category_counts = df['categoria'].value_counts()

# Create a bar chart showing the distribution of bots across categories
plt.figure(figsize=(12, 6))
sns.barplot(x=category_counts.index, y=category_counts.values)
plt.title('Distribution of Bots Across Categories')
plt.xlabel('Category')
plt.ylabel('Number of Bots')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.savefig('category_distribution.png')

# Calculate the average price of bots in each category
category_avg_price = df.groupby('categoria')['precioUSD'].mean()

# Create a bar chart showing the average price of bots across categories
plt.figure(figsize=(12, 6))
sns.barplot(x=category_avg_price.index, y=category_avg_price.values)
plt.title('Average Price of Bots Across Categories')
plt.xlabel('Category')
plt.ylabel('Average Price (USD)')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.savefig('category_avg_price.png')

# Add this information to the prompt.md file
with open('prompt.md', 'a') as f:
    f.write("## Category Distribution\\n\\n")
    f.write("The following bar chart shows the distribution of bots across different categories:\\n\\n")
    f.write("![Category Distribution](category_distribution.png)\\n\\n")
    f.write(category_counts.to_string() + "\\n\\n")

    f.write("## Average Price of Bots Across Categories\\n\\n")
    f.write("The following bar chart shows the average price of bots across different categories:\\n\\n")
    f.write("![Average Price of Bots Across Categories](category_avg_price.png)\\n\\n")
    f.write(category_avg_price.to_string() + "\\n\\n")
