# Movie-Recommendation-System

This project focuses on finding out the top five best picks similar to the recently watched movies. This is a content based recommendation system where the model suggest movies based on the watched content (like if someone is watching thriller then suggesting thriller movies).

<p align='center'>
<img src='https://github.com/Aryan-2003/Movie-Recommendation-System/blob/main/sample_img.png' height=500 width=1000>
</p>

**`Technology and Library Used`**
  * Python
  * Pandas
  * NumPy
  * Scikit-Learn
  * NLTK
  * Streamlit
  
Steps followed to build the project : 

1. Dataset Downloaded from Kaggle , `LINK` : https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata and this contains two csv files `tmdb_5000_movies.csv` & `tmdb_5000_credits.csv`

2. Explored both the csv files and merged them based on the **title** column.

3. Done feature engineering where we kept only those features which will help us and removed all those which we generally not consider while recommending a movie. Then merged all such words which play an important role while recommending a movie into a single feature **tags** and removed others.

4. Perfomed some basic `Natural Language Processing` tasks like lowercasing and stemming. Then as computer can't deal with text so converted into vectors with the help of **CountVectorizer** function present in the **scikit-learn**.

5. Finally to find out the similarities between each vector, used `cosine_similarity` and according to that find out the five most similar movies.

6. Saved the movies list, similarity model into **pickle** file and load those file in the **streamlit** app which finally got deployed on HEROKU.

`Project Link` : https://movie-recommend-syt.herokuapp.com/

## THANK YOU
  

