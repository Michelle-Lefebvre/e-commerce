import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products =[
    {id: 1, name: 'Verve+ 2', description: 'sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla', price: '$3,469.99', image: 'https://trek.scene7.com/is/image/TrekBicycleProducts/VervePlusMensUS_20_28299_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'},
    {id: 2, name: 'Verve+ 3 Lowstep', description: 'aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper', price: '$4,199.99', image: 'https://trek.scene7.com/is/image/TrekBicycleProducts/VERVEPlus3LOWSTEPUS_20_30980_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'},
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />     {/* defines height */}
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
        ))}
    </Grid>
</main>
    );
}

export default Products;