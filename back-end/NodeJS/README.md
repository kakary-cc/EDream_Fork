#### Back-End | Learning Content Pre-Process

---

Preprocess pdf article into plaintext using `pdf-parse (npm package)`

Parse the article using OpenAI API, get content interest tags

Generate quiz using API, store in a JSON file

Upload file (.pdf ?) & quiz (.json) onto supabse storage bucket, record filename

Create databse entry, with content title, tags & filename





#### Front-End | Learning Content Retrieval

---

Parse personal statement using OpenAI API, get interest tags

Store those tags into `user` database table

Query content database using user interests tags, return file title & filename

Query `getPublicUrl(fileName)` to get http link for download

Download content & quiz



