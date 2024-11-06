import Dropzone from "../components/adm/Dropzone"
import InputComponent from "../components/adm/Input"
import ButtonComponent from "../components/adm/Button"
import { useState, useContext } from "react"
import { FormsContext } from "../FormsContext"

export default function PublicationPage(){
    const validatePublicationFile = (file) => {
        const regex = /\.(bib)$/i
        return regex.test(file.name) ? null : {
            code: "file-invalid-type",
            message: "Tipo de arquivo inválido. Somente arquivos .bib são permitidos."
        }
    }

    const {handleFormChange, formData} = useContext(FormsContext)

    const [cpu, setCpu] = useState(formData.publication.cpu | 1)

    const handleSubmit = () => {
        const publicationData = { cpu }

        formData["publication"] = publicationData
        handleFormChange(formData)
    }

    return (
      <>
        <div className="flex flex-col items-center gap-10">
          <Dropzone 
            validator={validatePublicationFile}
            label="BibTeX File" 
            textOnHover={<p className="text-small font-bold px-1 py-2">BibTeX File</p>}/>
          <div className="w-7/12">
            <InputComponent
              className="font-xl"
              type="number"
              label="cpu"
              placeholder="0"
              value={cpu}
              onValueChange={setCpu}
              textOnHover="Number of threads"
            />
          </div>
          <ButtonComponent text="Confirmar" onPress={handleSubmit} />
        </div>
      </>
    );
}