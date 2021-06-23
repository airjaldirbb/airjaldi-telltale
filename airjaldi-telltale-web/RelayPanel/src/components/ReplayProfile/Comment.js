import React, {useState, useEffect} from 'react'
import { EditorState,   convertFromRaw , convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import  { Editor }  from  "react-draft-wysiwyg"
import { connect } from "react-redux";
 import { Section} from './CommentStyle'
import api from '../../redux/utils/api';
import { useQuery } from "react-query";
import {stateToHTML} from 'draft-js-export-html';
import moment from 'moment'
const convertFromJSONToHTML = (text) => {

    console.log(text)
      try{
          return { __html: stateToHTML(convertFromRaw(text))}
        } catch(exp) {
          console.log(exp)
          return { __html: 'Error' }
        }
  }
function Comment({auth:{user}, network , relay}) {
     
    const { data, status  , isFetching } = useQuery('getcomment', () =>
    api(`/getcoment/${network}/${relay}`),
    {
       
        refetchInterval: 1000,
      }
    )
    
    const [coment, setcoment] = useState(EditorState.createEmpty())

    const submit =  async () => {
        const data = {
            network:network,
             location:relay,
            _id:user.user.id,
            avatar:user.user.avatar,
            name:user.user.name,
            email:user.user.email,
            coment:convertToRaw(coment.getCurrentContent()),
            
        }
  
        try {
       
         sendata(data)

        

    }
    catch(err){

    }
       

}


const sendata = async (data) => {
    const res = await api.post('/addcoment', data)
}


   
    return (
        <Section>
        <div className="coment" >
            <div className="comment-list" >
            {status === "loading" && 
               <div className="alert" >
                   <div className="img" >
       
       <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615785167/cm5bk5luzcwquerawyfc.gif" ></img>
             </div>
                   </div>
               
            
               
               }

{status === "success" && (
 <>
  {data.data.map( ( number , index) => 
        <div className="box">
            <div className="img" >
                <img src={number.avatar} />
            </div>
            <ul>
                <li>{number.name}</li>
                <li dangerouslySetInnerHTML={convertFromJSONToHTML(number.coment)} ></li>
                <li className="date" > {moment(number.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
            </ul>
        </div>
  )}

    
    </>
)}

            </div>
            <div className="btn" >
             <Editor                          
                        editorState={coment}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        wrapperStyle={{ border: "2px solid #0085C5",   color: "black", marginBottom: "20px" }}
                        editorStyle={{  padding: "10px"}}
                        
                        onEditorStateChange={editorState => setcoment(editorState)}
                        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        
        }}
                  />
                 
                  </div>
                  <div className="submit" >
                  <button  onClick={()=> submit() }>Send</button>
                  </div>
        </div>
        </Section>
    )
}


const mapStateToProps = state => ({
    auth: state.auth,
  
  });
  

export default connect(
    mapStateToProps,
    {  }
  )(Comment);