interface Video{
  titulo:string,
  url: string
}

interface ExtraLink{
  text:string,
  url:string
}

export default interface Category {
  titulo:string,
  link?: string,
  cor: string,
  link_extra?: ExtraLink,
  videos: Array<Video>
}
