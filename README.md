
# QuranTraining

## Description

**QuranTraining** is a web application designed to facilitate the memorization of Quranic verses. Its primary goal is to make the review experience enjoyable and accessible, allowing users to review Quranic verses in a dynamic and personalized way.

### Application Concept:

The application works as follows:
1. **Select the smallest Surah you know**: The user selects the smallest Surah they know (for example, Surah Al-Baqara, number 002).
2. **Select the largest Surah you know**: The user then selects the largest Surah they know (for example, Surah Al-Fatiha, number 001).
3. **Choose the number of "rounds"**: The user sets how many "rounds" (review sessions) they want for their session.
4. **Random verse review**: The application randomly picks a Surah within the defined range and selects a random verse. The user can choose if the verse should be from the beginning, middle, or end of the Surah. The goal is to continue reviewing the Surah from the displayed verse onward.

The focus is on the user experience to make reviewing enjoyable, flexible, and tailored to each user. The application does not enforce a rigid method and allows users to choose their review interactively.

### Additional Goal:

While the **login page** functionality is **optional**, it will be added in the future to allow users to save their progress and resume where they left off. The objective is to make the application as accessible and user-friendly as possible, with a focus on simplicity.

## Project Structure

The project is organized as follows:
- **app.py**: The main file of the Flask application containing route logic.
- **templates/**: Directory containing HTML files (base.html, index.html, about.html, signup.html).
- **static/css/**: Directory containing CSS files for styling the application.
- **data.json**: JSON file containing all the Surahs of the Quran.
- **.env**: Configuration file for managing sensitive environment variables (e.g., API keys).

## Installation

1. Clone the project from GitHub:

   ```bash
   git clone https://github.com/your_username/QuranTraining.git
   cd QuranTraining
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install the necessary dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Create a `.env` file to manage environment variables if needed.

6. Run the Flask application:

   ```bash
   python app.py
   ```

7. Access the application by opening your browser at:

   ```
   http://127.0.0.1:5000
   ```

## License

This project is licensed under the **MIT License**. You are free to use, copy, modify, and distribute this project, provided you comply with the terms of the MIT License.

See the [LICENSE](LICENSE) file for more details.
