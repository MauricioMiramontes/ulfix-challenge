import { Table, Button } from 'reactstrap'

function UserTable (props) {
  return (
    <>
      <Table className='tablesorter' responsive>
        <thead className='text-primary'>
          <tr>
            <th className='header bg-default'>{props.Language === 'es' ? <>Nombre</> : <>Name</>}</th>
            <th className='header bg-default'>Email</th>
            <th className='header bg-default'>{props.Language === 'es' ? <>Redes Sociales</> : <>Social Media</>}</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr key={user.email}>
                <td><p> {user.name} </p> </td>
                <td><p>{user.email}</p></td>
                <td>
                  <Button
                    className='btn-icon btn-round'
                    color='twitter'
                    href='https://twitter.com'
                    id='tooltip639225725'
                    target='_blank'
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  {'  '}
                  <Button
                    className='btn-icon btn-round'
                    color='facebook'
                    href='https://www.facebook.com/'
                    id='tooltip982846143'
                    target='_blank'
                  >
                    <i className='fab fa-facebook-square' />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default UserTable
