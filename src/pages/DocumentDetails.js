import React, {useEffect} from 'react'
import {Grid,Typography,Button,ImageList} from '@material-ui/core'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {listProductDetails} from '../action/documentsAction'
import Header from '../components/Header'


const DocumentDetails = () => {
    const {id} = useParams()
    console.log(id)
    const documentDetails = useSelector(state => state.documentDetails)
    const {document} = documentDetails
    console.log(document)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(listProductDetails(Number(id)))
    },[id,dispatch])
  return (
    <>
        <Header />
        <Grid container spacing={[4]}>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Typography variant='h6'>{document.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant = 'body2'>{document.price}</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant = 'body2'>{document.category}</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant = 'body2'>{document.description}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}> 
          <ImageList rowHeight={200} style={{display:'flex',justifyContent:'center'}}>
            <img src={document.image} alt={document.image} />
          </ImageList>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <Button variant='contained' color='primary'>Delete</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default DocumentDetails