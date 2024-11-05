import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // More specific and secure CORS configuration
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003',
      'http://localhost:3004',
      'https://studio.apollographql.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })

  // Enhanced Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Autospace | Tathata')
    .setDescription(
      'Welcome to Autospace API\n\n' +
        'This is the complete documentation for our REST API.\n\n' +
        'Available APIs:\n' +
        '* **REST API:** You are here\n' +
        '* **GraphQL API:** Available at `/graphql`\n\n' +
        'For a better GraphQL experience, use the [Apollo Explorer](https://studio.apollographql.com/sandbox/explorer?endpoint=' +
        (process.env.API_URL || 'http://localhost:3000') +
        '/graphql)',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Autospace', 'Main Autospace API')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('', app, document)

  // More robust port handling
  const port = process.env.PORT || 3000
  await app.listen(port)
  console.log(`🚀 Application running on: http://localhost:${port}`)
  console.log(`📚 Documentation available at: http://localhost:${port}`)
}
bootstrap()
