import { Input } from "@nextui-org/react"
import ButtonComponent from "./Button"
import { SearchIcon } from "./SearchIcon"
import { Divider } from "@nextui-org/react"

export default function SearchBar(props){
    return(
        <>
            <div className="flex items-center gap-5 pl-10">
            <Input
                label="Buscar"
                isClearable
                radius="lg"
                className="max-w-lg"
                onValueChange={props.onValueChange}
                classNames={{                    
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-md",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focus=true]:bg-default-200/50",
                    "dark:group-data-[focus=true]:bg-default/60",
                    "!cursor-text",
                ],
                }}
                placeholder="Digite para buscar..."
                startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
                />
                <ButtonComponent
                    text="Buscar" 
                    variant="flat"
                    onPress={props.onPress}
                />
            </div>
            <Divider className="my-10"></Divider>
        </>
    )
}