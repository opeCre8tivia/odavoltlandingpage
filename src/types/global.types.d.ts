export interface PodcastType {
  id: string
  title: string
  caption: string
  description: string
  thumbnail_uri: string
  podcast_uri: string
  creatorId: number
  creator: any //TODO
  createdAt: any
}

export interface BookType {
  id: string
  title: string
  description: string
  artwork: string
  author: string
  chapters:ChapterType[]
}

interface BookTypeInput {
  title: string
  description: string
  artwork: string
  author: string
}


export interface ChapterType {
  id:string
  bookId:string
  book:BookType
  title:string
  subTitle:string
  description:string
  isPreview:boolean
  minimumGiftAmount:number 
  gifts:any[] 
  paragraphs:Paragraph[]
  audioUri:string
}
export interface ParagraphType {
  id:string
  text:string 
  chapterId:string
  chapter:ChapterType

}
