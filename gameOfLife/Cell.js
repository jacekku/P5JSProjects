function Cell(x, y, id) {
  this.x=x;
  this.y=y;
  this.id=id;
  //this.active=false;
  this.active=random(1)<.5?true:false;

  this.show=function() {
    if (this.active) {
      fill(0)
        rect(this.x*cSize, this.y*cSize, cSize-1, cSize-1);
    } else {
      fill(255);
      rect(this.x*cSize, this.y*cSize, cSize-1, cSize-1);
    }
  }
  var n=(this.x)*rows+(y-1),
  ne=(this.x+1)*rows+(y-1),
  e=(this.x+1)*rows+(y),
  se=(this.x+1)*rows+(y+1),
  s=(this.x)*rows+(y+1),
  sw=(this.x-1)*rows+(y+1),
  w=(this.x-1)*rows+(y),
  nw=(this.x-1)*rows+(y-1);
  this.tick=function() {
    var neigh=0;
    if (cells[n]!=null && this.y>0) {
      if (cells[n].active) {
        neigh++;
      }
    }
    if (cells[ne]!=null && ne>0 && ne<this.x*rows) {
      if (cells[ne].active) {
        neigh++;
      }
    }
    if (cells[e]!=null && e<this.x*rows) {
      if (cells[e].active) {
        neigh++;
      }
    }
    if (cells[se]!=null && se<cLen && this.x*rows) {
      if (cells[se].active) {
        neigh++;
      }
    }
    if (cells[s]!=null && s<cLen) {
      if (cells[s].active) {
        neigh++;
      }
    }
    if (cells[sw]!=null && sw<cLen && this.x>0) {
      if (cells[sw].active) {
        neigh++;
      }
    }
    if (cells[w]!=null && w>0) {
      if (cells[w].active) {
        neigh++;
      }
    }
    if (cells[nw]!=null && nw>0 && this.x>0) {
      if (cells[nw].active) {
        neigh++;
      }
    }

    if (neigh<=1)  this.active=false;
    if (neigh>=4)  this.active=false;
    if (neigh==3||neigh==2) this.active=true;
  }
}