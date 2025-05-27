Contract Breach Risk Analysis for Government Procurement

🔍 Objective
To assess and cluster suppliers based on their likelihood of breaching contracts using historical procurement data from the GeBIZ platform. The goal is to identify high-risk suppliers for better contract awarding strategies.

🧾 Dataset
Source: Government Procurement via GeBIZ

Fields Used: supplier_name, awarded_amt, award_date, agency, tender_detail_status, etc.

Target: Binary breach risk flag or predicted score (breach_risk, breach_risk_score)

📊 Exploratory Data Analysis (EDA)
Converted and cleaned date fields.

Analyzed award trends over time.

Identified top contracting agencies and suppliers.

Examined award amounts by supplier.

🤖 Machine Learning Model
Trained a classification model to predict breach risk scores using supplier and contract attributes.

Used predict_proba() to assign each contract a risk score.

🔎 Clustering High-Risk Suppliers
Created supplier-level summaries:

supplier_freq = number of tenders awarded

Average awarded_amt

Mean predicted breach_risk_score

Scaled data and applied KMeans Clustering.

Used Elbow Method to select optimal k.

Segmented suppliers into clusters, identifying high-risk segments.

🚨 Risk Scoring System
Defined thresholds:

0.7 → High Risk

0.4–0.7 → Medium Risk

< 0.4 → Low Risk

Assigned risk categories to suppliers.

Summarized the number of suppliers in each category.

📈 Impact
Helps government agencies prioritize due diligence on high-risk suppliers.

Enables proactive contract breach mitigation.

🔧 Tools & Libraries
Python (Pandas, Scikit-learn, Matplotlib)

Jupyter Notebook
