class WaterMark {
  constructor(color="white",name="丁真珍珠",size=28) {
    this.color=color;
    this.name=name;
    this.size=size;
  }
  upload(src) {
    let scale;
    const img=new Image();
    img.src=src;
    if(document.getElementById("canvas")) {//如果画布已存在
      const canvas=document.getElementById("canvas");
      ctx.clearRect(0,0,1280,700);//存在就先清空画布
    } else {
      const canvas=document.createElement("canvas");
      const body=document.querySelector("body");
      body.appendChild(canvas);
      canvas.setAttribute("id","canvas");
      canvas.setAttribute("width","1280");
      canvas.setAttribute("height","700");
    }
    img.onload=()=>{
      const ctx=canvas.getContext("2d");
      this.draw(ctx,img);
    };

  }
  draw(ctx,img) {
    let scale;
    1280/img.width>700/img.height?scale=700/img.height:scale=1280/img.width;//确定缩放值
    ctx.drawImage(img,0,0,img.width*scale,img.height*scale);
    ctx.font=`${this.size}px serif`//字体大小
    ctx.fillStyle=`${this.color}`;
    ctx.fillText(`BY ${this.name}`,img.width*scale-100-this.size*this.name.length,img.height*scale-20);
  }

  download(name) {
    if(document.getElementById("canvas")){
      const url=document.getElementById("canvas").toDataURL();
      const a=document.createElement("a");
      a.href=url;
      a.download=name;
      a.click();
    }
  }

}