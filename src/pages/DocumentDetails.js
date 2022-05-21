import React, {useEffect} from 'react'
import {Grid,Typography,Button,ImageList,CircularProgress} from '@material-ui/core'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {listProductDetails, deleteDocument} from '../action/documentsAction'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'


const DocumentDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)
    const documentDetails = useSelector(state => state.documentDetails)
    const {loading ,document} = documentDetails
    console.log(document)
    const dispatch = useDispatch()
    const deleteItem = () => {
      dispatch(deleteDocument(id))
      navigate('/dashboard')
    }
    useEffect(()=>{
      dispatch(listProductDetails(Number(id)))
    },[id,dispatch])
  return (
    <>
        <Header />
        {loading && <CircularProgress />}
        <Grid container spacing={[4]}>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Typography variant='h6'>{document.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant = 'body2'>price:{document.price}</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant = 'body2'>category:{document.category}</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant = 'body2'>Description:{document.description}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}> 
          <ImageList rowHeight={200} style={{display:'flex',justifyContent:'center'}}>
            <img src={document.image} alt={document.image} />
          </ImageList>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <Button variant='contained' color='primary' onClick ={deleteItem}>Delete</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default DocumentDetails