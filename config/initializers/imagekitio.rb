ImageKitIo.configure do |config|
    if Rails.env.development?
      config.public_key = ENV['public_key']
      config.private_key = ENV['private_key']
      config.url_endpoint = ENV['REACT_APP_END_POINT'] # https://ik.imagekit.io/your_imagekit_id
    end

    if Rails.env.production?
      config.public_key = process.env.public_key
      config.private_key = process.env.private_key
      config.url_endpoint = process.env.REACT_APP_END_POINT
    end

    config.service = :carrierwave
    #config.service = :active_storage
    # config.constants.MISSING_PRIVATE_KEY = 'custom error message'
  end
  #make sure to replace the your_public_key, your_private_key and your_url_endpoint with actual values