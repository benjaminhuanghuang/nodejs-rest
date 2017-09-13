const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const {Strategy : JwtStrategy, ExtractJwt} = require('passport-jwt');
const jwtOptions={
    jwtFromRequest : ExtractJwt.fromAuthHeader(),
    secretOrKey:'secret',
    algorithms:['HS256']
};
passport.use(new JwtStrategy(jwtOptions, function(jwtPayload, done){
    done(null, {name: jwtPayload.name});
}));

const app = express();
const server = http.createServer(app);

// middle wares
app.use(express.static("client"));
// use middleware simulate latency
// app.use(function(req,res,next)
// {
//   setTimeout(next,3000)
// });

app.use(passport.authentication('jwt',{session:false}))
app.use('/api', bodyParser.json());

// api router
const widgetRouter = require('./routers/widgets');
app.use('/api', widgetRouter);

// lions api router
const lionsRouter = require('./routers/lions');
app.use('/api', lionsRouter);

server.listen(3000, function () {
    console.log('REST service running on port 3000');
});