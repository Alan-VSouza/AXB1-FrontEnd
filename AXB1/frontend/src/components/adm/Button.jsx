import {Button} from "@nextui-org/react";

export default function ButtonComponent(props) {
  return (
    <>
        <Button 
          className={props.className}
          startContent={props.icon} 
          size={props.size} 
          color={props.color} 
          variant={props.variant} 
          onPress={props.onPress}
          radius={props.radius}>
        {props.text}
        </Button>
    </>
  );
}