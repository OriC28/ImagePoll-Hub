from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    CLOUD_NAME: str
    API_KEY: str
    API_SECRET: str
    CLOUDINARY_URL: str
    DATABASE_URL: str

    class Config:
        env_file = ".env"


settings = Settings()
