import { useState } from 'react'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guipardi.png',
      name: 'Guilherme Pardi',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'gui.portfolio/REACT'}
    ],
    publishedAt: new Date('2023-02-28 19:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Boa tarde, pessoal!'},
      {type: 'paragraph', content: 'Coloquei agora no meu canal a última aula sobre REACT.JS!'},
      {type: 'link', content: 'mayk.youtube/REACT.JS'}
    ],
    publishedAt: new Date('2023-01-28 20:00:00')
  }
]

export function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <SideBar>SideBar</SideBar>

        <main>

          {posts.map(post => {
            return <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}

        </main>

      </div>
    </div>
  )
}
