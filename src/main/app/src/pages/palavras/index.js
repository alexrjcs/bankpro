import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './palavras.css'
import { ApiMain } from '../../services/ApiMain'

function Palavras() {

    const [valueRequest, setValueRequest] = useState()
    const [valueResponse, setValueResponse] = useState()
    const [isValidCase, setIsValidCase] = useState()
    const [btnDisabled, setBtnDisabled] = useState()
    const [alertRender, setAlertRender] = useState()

    useEffect(() => {
        setValueResponse("");
        setAlertRender("");
        if(valueRequest === undefined || valueRequest.length == 0){
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
        }
    }, [valueRequest]);

    function enviarTexto() {
        if (valueRequest !== undefined && valueRequest.length > 0) {
            let request = { "text" : valueRequest, "isValidCase" : isValidCase };
            ApiMain.countPalavras(request).then((resp) => {
                if (resp !== undefined) {
                    let listPalavras = resp.data.palavras;
                    
                    
                    let buildResponse="";
                    Object.keys(listPalavras).map(function(key) {
                        buildResponse = (buildResponse.length > 0 ? buildResponse + ", "  :  buildResponse ) + key + " = " + listPalavras[key]
                    })
                    
                    setValueResponse(buildResponse)
                    setAlertRender(<Alert variant="success">Deu tudo certo! Encontramos {resp.data.quantidade} {resp.data.quantidade > 1 ? "palavras" : "palavra"}</Alert>);
                }
            }).catch ((error)=>{
                setAlertRender(<Alert variant="danger">Oops! Ocorreu alguma falha "{error.message}"</Alert>);
            })
        }
    }

    function limparTexto() {
        setValueRequest("");
    }
    
    function changeValue(event) {           
        setValueRequest(event.target.value)
    }
    
    return (
        <div className="container">
            {alertRender}           
            <h4>Prova bankpro</h4>
            <Form className="mb-3">
                <Form.Group className="mb-3">
                    <Form.Label>Entre com a frase</Form.Label>
                    <Form.Control  as="textarea" rows={3}
                                    value={valueRequest}
                                    onChange = {changeValue} />
            
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check 
                    type="switch"                    
                    label="Considerar case-sensitive"
                    checked={isValidCase}
                    onChange = {(e)=>{setIsValidCase(!isValidCase)}}
                />
            
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Resposta com a contagem</Form.Label>
                    <Form.Control   as="textarea" rows={3}
                                    value={valueResponse}
                                    readOnly= {true}/>
            
                </Form.Group>
                <div className="divButton">
                    <Button variant="primary"
                            disabled={btnDisabled}
                            onClick={enviarTexto}>
                        Click para contar as palavras
                    </Button>
                    
                    <Button variant="danger"
                            onClick={limparTexto}>
                        Limpar
                    </Button>
                </div>
               
            </Form>
        </div>
    )
}


export default (Palavras);