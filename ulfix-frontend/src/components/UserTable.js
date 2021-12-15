import { Table } from 'reactstrap'

function UserTable (props) {
  return (
    <>
      <Table className='tablesorter' responsive>
        <thead className='text-primary'>
          <tr>
            <th className='header bg-default'>{props.lenguage === 'es' ? <>Nombre</> : <>Name</>}</th>
            <th className='header bg-default'>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default UserTable
