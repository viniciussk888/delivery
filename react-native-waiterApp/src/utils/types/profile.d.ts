type ProfileDetailsResponseData = {
  personal_information: {
    name: string;
    birthday: string;
    gender: string;
    mothers_name: string;
    fathers_name: string;
    marital_status: string;
    ethnicity: string;
    nationality: string;
    place_of_birth: string;
  };
  residential_information: {
    zip_code: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  contact_information: {
    email: string;
  };
  occupational_information: {
    occupation_status: string;
    company_name: string;
    company_cnpj: string;
    occupation: string;
    pwd: boolean;
    disability: string;
  };
  responsible_information: {
    responsible_name: string;
    responsible_cpf: string;
    responsible_document: string;
    degree_kinship: string;
  };
  schooling_information: {
    schooling: string;
    school_name: string;
    teaching_type: string;
    public_registered: boolean;
    school_city: string;
    school_state: string;
  };
};

type ProfileChangePasswordData = {
  current_password: string;
  new_password: string;
  confirm_new_password: string;
};

type UpdatePhotoProfileResponseData = {
  file_url: string;
};
