import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow, set } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState([
    'Post muito bacana!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete 
    })

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}

      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return <Comment onDeleteComment={deleteComment} key={comment} content={comment}/>
          })
        }
      </div>
    </article>
  )
}