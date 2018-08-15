fetch(null, 'get', '/', view);

function view(err, obj) {
  const object = JSON.parse(obj);
  if (object.err) {
    console.log('error');
  }

  const arr = object.data;
  console.log('arr.length', arr);
  const content = document.getElementsByClassName('posts')[0];
  // CREATE ELEMENTS
  arr.forEach((element) => {
    const post = document.createElement('div');
    post.classList = 'post';

    const postContent = document.createElement('div');
    postContent.classList = 'post-content';

    const postTitle = document.createElement('h3');
    postTitle.classList = 'post-title';
    postTitle.textContent = element.post_title;

    const postBody = document.createElement('p');
    postBody.classList = 'post-body';
    postBody.textContent = element.post_body;

    const postDetails = document.createElement('div');
    postDetails.classList = 'post-details';

    const owner = document.createElement('span');
    owner.classList = 'owner';
    owner.textContent = element.posted_by;

    const date = document.createElement('span');
    date.classList = 'date';
    date.textContent = element.date;

    const time = document.createElement('span');
    time.classList = 'time';
    time.textContent = element.time;

    // const remove = document.createElement('span');
    // remove.classList = 'fas fa-trash';
    // const id = element.paint_id;
    // remove.addEventListener('click', () => {
    //   fetch(null, 'GET', `/deletePost?${id}`, (err, data) => {
    //     window.location = '/';
    //   });
  });
  const line = document.createElement('hr');
  // APPEND CHILDS
  postContent.appendChild(postTitle);
  postContent.appendChild(postBody);
  postDetails.appendChild(date);
  postDetails.appendChild(time);
  postDetails.appendChild(remove);
  post.appendChild(postContent);
  post.appendChild(postDetails);
  content.appendChild(post);
  content.appendChild(line);
}
