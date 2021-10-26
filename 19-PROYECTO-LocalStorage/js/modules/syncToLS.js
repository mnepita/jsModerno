function syncToLS() {
  tweets = localStorage.setItem('tweets', JSON.stringify(tweets));

}