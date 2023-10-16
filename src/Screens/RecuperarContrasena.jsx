import FormRecuperar from "../components/FormRecuperar";

function RecuperarContrasena() {
    return (
        <div className="flex bg-cover bg-center min-h-screen z-1 relative" style={{
            backgroundImage: 'url("/Img/Micro.jpg")',
        }}>
            
            <div className="w-full flex items-center justify-center lg:w-1/2" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',}}>
                <FormRecuperar />
            </div>
            <div className="hidden lg:flex h-full items-center justify-center" ></div>
        </div>
        
    )
}

export default RecuperarContrasena;