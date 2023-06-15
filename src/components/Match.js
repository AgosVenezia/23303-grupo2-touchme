import * as React from 'react';
import {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TarjetaPersona from 'react-tinder-card';
import './Match.css';
//import database from './firebase'

function Match() {

    const theme = useTheme();
    
    // Sin Firebase
    const [persona,setPersona] = useState([  
        {
            nombre: 'ENZO FERNANDEZ',
            edad: 30,
            descripción: 'Creativo soñador, apasionado por el arte y la música. Busco una musa inspiradora que comparta mi amor por la expresión artística y que juntos creemos una historia única.',
            url: 'https://static.diariofemenino.com/uploads/amor/196365-hombres-tinder.jpg'
        },
        {
            nombre: 'DIEGO MARTINEZ',
            edad: 23,
            descripción: 'Joven aventurero de Leo con una pasión por viajar, amante del café y de las conversaciones profundas. Busco alguien con quien explorar el mundo y compartir risas inolvidables.',
            url: 'https://us.123rf.com/450wm/rawpixel/rawpixel1705/rawpixel170576213/79318767-gente-adulta-cara-retrato-de-estudio-de-expresi%C3%B3n-de-sonrisa.jpg'
        },
        {
            nombre: 'NAHIARA GONZALEZ',
            edad: 25,
            descripción: 'Soy de Acuario, amante de los animales. En mis ratos libres suelo leer o escuchar música. Soy estudiante de diseño gráfico. Actualmente busco a alguien con quien pasar un buen momento.',
            url: 'https://www.zeitjung.de/wp-content/uploads/2017/11/My-Body-my-Choice-1440x864.jpg'
        }
    ]);

    // Con Firebase
    /*
    const [persona,setPersona] = useState([]);

    useEffect(() => {
        
        const desuscribirse = database.collection('personas').onSnapshot(snapshot => (
            setPersona(snapshot.docs.map( doc => doc.data()))
        ));

        return () => {
            desuscribirse();
        }

    }, [])
    */

return (
        <div className='tinderCard__container'>
                {persona.map(persona => (
                    
                    <>
                    <TarjetaPersona 
                        className='swipe'
                        key={persona.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div>
                        <Card sx={{ display: 'flex', width: 770, height: 419, marginTop: 15, backgroundColor: "#F1EFEF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "10px", }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 298, height: 419, borderRadius: "10px 0px 0px 10px", }}
                                image={persona.url}
                                alt="Candidate to match"
                            />
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}>
                                    <Chip sx={{ width: 335, height: 55, background: "linear-gradient(180deg, #BA2222 0%, #CC7A00 100%)", color: '#FFFFFF', borderRadius: '50px', mt: "40px", fontFamily: "Inter", fontStyle: "normal", fontWeight: 600, fontSize: '24px', lineHeight: '29px' }}
                                    label={persona.nombre}
                                    />
                                </Box>
                                <CardContent sx={{ flex: '1 0 auto', width: 360, ml: 7 }}>
                                <Typography component="div" sx={{ mt: "28px", fontFamily: "Inter", fontStyle: "normal", fontWeight: 600, fontSize: '24px', lineHeight: '29px', color: "#373737", }}>
                                    {persona.edad + ' AÑOS'}
                                </Typography>
                                <Typography component="div" sx={{ mt: "21px", fontFamily: "Inter", fontStyle: "normal", fontWeight: 400, fontSize: '18px', lineHeight: '22px', color: "#373737", }}>
                                    {persona.descripción}
                                </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 335, pl: 1, pb: 1, ml: 7, mb: "37px" }}>
                                <IconButton>
                                    <CancelIcon sx={{ height: 45, width: 45, color: "#000000" }} />
                                </IconButton>
                                <IconButton>
                                    <StarIcon sx={{ height: 45, width: 45, color: "#CC7A00" }} />
                                </IconButton>
                                <IconButton>
                                    <FavoriteIcon sx={{ height: 45, width: 45, color: "#BA2222" }}/>
                                </IconButton>
                                </Box>
                            </Box>
                        </Card>
                        </div>
                        
                    </TarjetaPersona>
                    </>
                 ))}
        </div>
    );
}

export default Match;