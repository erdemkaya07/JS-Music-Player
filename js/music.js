class Music {
  constructor(title, singer, img, file){
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }
  //getName'i cagirdigimiz an da sarki ismi ve sarkici ismi gelecek
  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music('Bosver','Nilifur','1.jpeg','1.mp3'),
  new Music('Bu da gecer','Yalin','2.jpeg','3.mp3'),
  new Music('Aramizda ucurumlar','Suat Suna','3.jpeg','3.mp3')
];