import React, {useEffect} from 'react'
import { IconButton,Grid} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import MaterialTable from '@material-table/core';
import {getDocuments,deleteDocument} from '../action/documentsAction'
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import Header from '../components/Header';


const DocumentDashboard = () => {
  const documentList = useSelector(state => state.documentList)
  const {documents} = documentList
  const dispatch = useDispatch()
  const deleteDocumentFile= (id) => {
    dispatch(deleteDocument(id))
  }
  useEffect(()=>{
    dispatch(getDocuments())
  },[dispatch])

  return (
    <>
    <Header />
    <Grid>
      <Grid item xs={12}>
          <MaterialTable 
          title='Document Dashboard'
          columns= {[
            {title:'Document Id',field:'id'},
            {title:'Category',field:'category'},
            {title:'title',field:'title'},
            {title:'Price',field:'price'},
            {title:'View Details',render:(data)=> <Link to ={`${data.id}`}>View</Link>},
            {title:'Delete',render:()=> <IconButton onClick= {(data) => deleteDocumentFile(data.id)}><DeleteIcon /></IconButton>}
          ]}

          data = {documents}/>
      </Grid>
    </Grid>
    </>
  )
}

export default DocumentDashboard