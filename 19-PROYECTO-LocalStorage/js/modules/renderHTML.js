function renderHTML() {
  clearHTML();
  if (tweets.length > 0) {
    tweets.forEach(tweet => {
      const li = document.createElement('li');
      li.innerHTML = tweet.tweet;
      listaTweets.appendChild(li);
    })
  }

  syncToLS();
}