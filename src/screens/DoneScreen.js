import { useEffect, useState } from 'react'

import {
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Divider,
  Button,
} from '@material-ui/core'
const DoneScreen = ({ history }) => {
  const [myPcBuid, setMyPcBuild] = useState(null)
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    if (localStorage.getItem('myPcBuild') !== null) {
      let pc = JSON.parse(localStorage.getItem('myPcBuild'))
      setTotal(pc.total)
      setMyPcBuild(pc.components)
      setName(pc.myName)
    } else {
      setName('')
      setTotal(0)
      setMyPcBuild(null)
      history.push('/')
    }
  }, [history])

  const print = () => {
    window.print()
  }

  return (
    <>
      <Container maxWidth='md' className='printArea'>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          style={{ padding: 20 }}
        >
          {!myPcBuid ||
          myPcBuid.length === 0 ||
          myPcBuid === null ||
          myPcBuid === ' ' ? (
            <Grid item xs={12}>
              <h1>Error!</h1>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <h2
                style={{
                  background: '#eb346b',
                  padding: '20px',
                  color: '#eee',
                }}
              >
                /// {name}'s {`RM${total}`} Rigs ///
              </h2>
              <div className='noprint'>
                <Button onClick={() => print()} variant='outlined'>
                  Save as Pdf
                </Button>

                <Button onClick={() => history.push('/')}>
                  Go Back | Build another rigs
                </Button>
              </div>

              <List>
                {myPcBuid &&
                  myPcBuid.map((component, i) => (
                    <>
                      <ListItem key={i}>
                        <ListItemText
                          primary={component.name}
                          secondary={`RM${component.price}`}
                        />
                      </ListItem>
                      <Divider />
                    </>
                  ))}
              </List>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default DoneScreen
