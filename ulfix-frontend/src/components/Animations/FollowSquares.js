import { useState, useEffect } from 'react'

function FollowSquares () {
  const [squarePerspective, setSquarePerspective] = useState('')

  useEffect(() => {
    document.body.classList.toggle('register-page')
    document.documentElement.addEventListener('mousemove', followCursor)
    // Se especifica como limpiar este efecto
    return function cleanup () {
      document.body.classList.toggle('register-page')
      document.documentElement.removeEventListener('mousemove', followCursor)
    }
  }, [])

  const followCursor = (event) => {
    const posX = event.clientX - window.innerWidth / 2
    const posY = event.clientY - window.innerWidth / 6
    setSquarePerspective(
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)'
    )
  }

  return (
    <>
      <div
        className='square square-7'
        id='square7'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-8'
        id='square8'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-1'
        id='square1'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-2'
        id='square2'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-3'
        id='square3'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-4'
        id='square4'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-5'
        id='square5'
        style={{ transform: squarePerspective }}
      />
      <div
        className='square square-6'
        id='square6'
        style={{ transform: squarePerspective }}
      />
    </>
  )
}

export default FollowSquares
