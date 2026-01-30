import torch
import torch.nn as nn
import torch.optim as optim
import json
import os
import torch.nn.functional as F # Needed for percentages (Softmax)

# Maps skills to ID numbers (0-9)
training_data = [
    # Topics
    ("website frontend interface ui ux", 0),                 # Web
    ("model train AI regression neural gpt", 1),             # AI/ML
    ("RAG gemini automation research summaries literature nlp vision opencv", 1), # AI/ML Extended
    ("app apk mobile touch ios", 2),                         # Mobile
    ("SolidWorks fusion360 CAD 3d design render", 3),        # CAD
    ("motor servo robot sensor actuator kinematics", 4),     # Robotics
    ("pcb soldering circuit voltage current", 5),            # Circuits
    ("aws cloud server deploy firebase azure", 6),           # Cloud
    ("microcontroller firmware embedded esp32 raspberry", 7),# Embedded
    ("database storage pipeline etl warehouse", 8),          # Data
    ("stress strain force torque mechanics gear", 9),        # Physics
    ("biomedical medical biotech", 15),                      # Biomedical
    
    # Languages
    ("python pandas numpy matplotlib scipy flask django", 10), # Python
    ("C++ cpp stl boost qt pointer", 11),                      # C++
    ("Java spring maven gradle junit swing", 12),              # Java
    ("react javascript typescript node npm redux nextjs", 13), # React
    ("sql mysql postgres sqlite query join", 14)               # SQL
]

# The Vocabulary of Skills
vocab = {
    "website":0, "frontend":1, "interface":2, "ui":3, "ux":4,
    "model":5, "train":6, "AI":7, "regression":8, "neural":9, "gpt":10,
    "app":11, "apk":12, "mobile":13, "touch":14, "ios":15,
    "SolidWorks":16, "fusion360":17, "CAD":18, "3d":19, "design":20, "render":21,
    "motor":22, "servo":23, "robot":24, "sensor":25, "actuator":26, "kinematics":27,
    "pcb":28, "soldering":29, "circuit":30, "voltage":31, "current":32,
    "aws":33, "cloud":34, "server":35, "deploy":36, "firebase":37, "azure":38,
    "microcontroller":39, "firmware":40, "embedded":41, "esp32":42, "raspberry":43,
    "database":44, "storage":45, "pipeline":46, "etl":47, "warehouse":48,
    "stress":49, "strain":50, "force":51, "torque":52, "mechanics":53, "gear":54,
    "RAG":55, "gemini":56, "biomedical":57, "automation":58, "research":59, 
    "summaries":60, "literature":61, "nlp":62, "vision":63, "opencv":64, "medical":65, "biotech":66,

    # Languages
    "python":67, "pandas":68, "numpy":69, "matplotlib":70, "scipy":71, "flask":72, "django":73,
    "C++":74, "cpp":75, "stl":76, "boost":77, "qt":78, "pointer":79,
    "Java":80, "spring":81, "maven":82, "gradle":83, "junit":84, "swing":85,
    "react":86, "javascript":87, "typescript":88, "node":89, "npm":90, "redux":91, "nextjs":92,
    "sql":93, "mysql":94, "postgres":95, "sqlite":96, "query":97, "join":98
}

# The Labels for the Tags
tags = {
    0: "Web Dev", 1: "AI/ML", 2: "Mobile App", 3: "CAD/Design", 4: "Robotics",
    5: "Circuits", 6: "Cloud Comp", 7: "Embedded Sys", 8: "Data Eng", 9: "Mechanics",
    10: "Python", 11: "C++", 12: "Java", 13: "React", 14: "SQL", 15: "Biomedical"
}

def make_bow_vector(sentence):
    vec = [0] * len(vocab) # Initialize a zero vector 
    for word in sentence.lower().split(): # Split the sentence into words
        if word in vocab:
            vec[vocab[word]] += 1
    return torch.tensor(vec).float().unsqueeze(0) # Convert to a PyTorch tensor, float type

def make_bow_vector(sentence):
    vec = [0] * len(vocab)
    for word in sentence.lower().split():
        # Remove punctuation roughly
        clean_word = word.replace(".", "").replace(",", "")
        if clean_word in vocab:
            vec[vocab[clean_word]] += 1
    return torch.tensor(vec).float().unsqueeze(0)

def get_trained_model():
    model = nn.Linear(len(vocab), len(tags))
    loss_function = nn.CrossEntropyLoss()
    optimizer = optim.SGD(model.parameters(), lr=0.1)

    # Train loop
    for epoch in range(200):
        for sentence, label in training_data:
            model.zero_grad()
            bow_vec = make_bow_vector(sentence)
            target = torch.tensor([label], dtype=torch.long)
            output = model(bow_vec)
            loss = loss_function(output, target)
            loss.backward()
            optimizer.step()
    return model

def auto_tag_file():
    file_path = './frontend/src/data/projects.json'
    
    # CONFIDENCE THRESHOLD
    # 0.15 means "If the model is 15% sure, include the tag"
    # Adjust this up (0.2) for fewer tags, or down (0.1) for more tags
    THRESHOLD = 0.15 

    if not os.path.exists(file_path):
        print("Could not find ./frontend/src/data/projects.json")
        return

    print("Training Model...")
    model = get_trained_model()
    
    print(f"Reading {file_path}...")
    with open(file_path, 'r') as f:
        projects = json.load(f)

    print("Updating Tags...")
    for project in projects:
        desc = project.get('description', '')
        title = project.get('title', 'Unknown')
        full_text = f"{title} {desc}"
        
        # Run Prediction
        vector = make_bow_vector(full_text)
        with torch.no_grad():
            logits = model(vector)

            # Softmax turns raw numbers into percentages (0.0 to 1.0)
            probs = F.softmax(logits, dim=1).squeeze()
            
            # Find all tags that cross the threshold
            active_tags = []
            for i, prob in enumerate(probs):
                if prob.item() > THRESHOLD:
                    active_tags.append(tags[i])
            
            # Sort them so they look good
            active_tags.sort()

        # Update tags
        project['tags'] = active_tags
        print(f"   -> '{title}' tags: {active_tags}")

    # Save
    with open(file_path, 'w') as f:
        json.dump(projects, f, indent=2)
    
    print("Done.")

if __name__ == "__main__":
    auto_tag_file()