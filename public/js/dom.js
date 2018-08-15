
fetch(null,'GET','/checkauth',(err, obj) => {
    if(err){
        console.log(err);
    }
    console.log(typeof obj);
    if(obj){
        console.log(obj);
    }else{
        console.log(obj);
    }
});

fetch(null, 'get', '/getposts', view);
function view(err, obj) {
    console.log(obj);
  const object = JSON.parse(obj);
  console.log(object);
  console.log('gdfg')
  if (object.err) {
    console.log('error');
  }

  const content = document.getElementsByClassName('posts')[0];
  // CREATE ELEMENTS
  object.forEach((element) => {
    let post = document.createElement('div');
    post.classList = 'post';

    let postContent = document.createElement('div');
    console.log(postContent)
    postContent.classList = 'post-content';
    let postTitle = document.createElement('h3');
    postTitle.classList = 'post-title';
    postTitle.textContent = element.post_title;

    let postBody = document.createElement('p');
    postBody.classList = 'post-body';
    postBody.textContent = element.post_body;

    let postDetails = document.createElement('div');
    postDetails.classList = 'post-details';

    let owner = document.createElement('span');
    owner.classList = 'owner';
    owner.textContent = element.posted_by;

    let date = document.createElement('span');
    date.classList = 'date';
    date.textContent = element.date;

    let time = document.createElement('span');
    time.classList = 'time';
    time.textContent = element.time;
    let line = document.createElement('hr');

    postContent.appendChild(postTitle);
    postContent.appendChild(postBody);
    postDetails.appendChild(date);
    postDetails.appendChild(time);
    // postDetails.appendChild(remove);
    post.appendChild(postContent);
    post.appendChild(postDetails);
    content.appendChild(post);
    content.appendChild(line);


    // const remove = document.createElement('span');
    // remove.classList = 'fas fa-trash';
    // const id = element.paint_id;
    // remove.addEventListener('click', () => {
    //   fetch(null, 'GET', `/deletePost?${id}`, (err, data) => {
    //     window.location = '/';
    //   });
  });
 
  // APPEND CHILDS

}
