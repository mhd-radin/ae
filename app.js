// var c = new showdown.Converter();
// var html = cnv.makeHtml('');

const FilesData = [
  {
    title: 'After Effects Tutorials #1',
    id: 'starting',
    tag: 'ae'
  },
  {
    title: 'After Effects Tutorials - Motion Poster',
    id: 'motion_poster',
    tag: 'ae'
  },{
    title: 'Playcanvas Shaders and Effects Links',
    id: 'shaders_link',
    tag: 'playcanvas'
  }
];


function listData() {
  var elem = document.querySelector('.lists');
  elem.innerHTML = '';
  
  FilesData.forEach(function(item, i) {
    var src = item.tag+'.' + item.id + '.md';
    elem.innerHTML += `<div class="box" id="${item.id}">
          <div class="title">📄 ${item.title}</div>
          <p class="link">>> ./${src} • ${item.tag}</p>
        </div>`;
    
    setTimeout(function(){
    document.getElementById(item.id).onclick = function (){
      openFile(item.id, i, src)
    }
    }, 20)
  })
}

function openFile(id, i, src) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function(){
    if (xhr.readyState === xhr.DONE) {
      var md = xhr.response
      document.querySelector('.lists').remove();
      const converter = new showdown.Converter();
      document.querySelector('.doc').innerHTML = converter.makeHtml(md)
    }
  })
  xhr.open('GET', src)
  xhr.send(null)
}

listData()