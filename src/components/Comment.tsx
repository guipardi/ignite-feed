import styles from './Comment.module.css';

 import { ThumbsUp, Trash } from 'phosphor-react';
 import { Avatar } from './Avatar';
import { useState } from 'react';

 export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {  /* Preciso usar dessa forma para pegar o valor mais atual do estado */
      return state + 1
    });
  }

   return (
     <div className={styles.comment}>
       <Avatar hasBorder={false} src="https://github.com/guipardi.png" alt="" />

       <div className={styles.commentBox}>

         <div className={styles.commentContent}>
          
          <header>
            
            <div className={styles.authorAndTime}>
              <strong>Guilherme</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button onClick={handleLikeComment}> {/* Se quisesse executar o código automaticamente
                                                o certo serie eu colocar uma aroow function,
                                                levando em conta que, se eu colocar a função 
                                                diretamente, entraria em loop */}
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
        
      </div>
    </div>
  )
}