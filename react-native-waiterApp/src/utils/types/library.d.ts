declare namespace LibraryCategoryData {
  namespace AudioCategory {
    type AudioCategoryData = {
      title: string;
      author: string;
      description: string;
      subject: string;
      ability: string;
      tags: string[];
      content: string;
      url_media: string;
      url_cover_media: string;
    };
  }
  namespace EbookCategory {
    type EbookCategoryData = {
      title: string;
      author: string;
      description: string;
      subject: string;
      ability: string;
      tags: string[];
      content: string;
      url_media: string;
      url_cover_media: string;
    };
  }

  namespace GameCategory {
    type GameCategoryData = {
      title: string;
      author: string;
      description: string;
      subject: string;
      ability: string;
      tags: string[];
      content: string;
      url_media: string;
      url_cover_media: string;
    };
  }
  namespace DocumentCategory {
    type DocumentCategoryData = {
      title: string;
      author: string;
      description: string;
      subject: string;
      ability: string;
      tags: string[];
      content: string;
      url_media: string;
      url_cover_media: string;
    };
  }
  namespace TextCategory {
    type TextCategoryData = {
      title: string;
      author: string;
      description: string;
      subject: string;
      ability: string;
      tags: string[];
      content: HTMLSource;
      url_media: string;
      url_cover_media: string;
    };
  }
  namespace QuizCategory {
    type QuizItemOptionsProps = {
      id: number;
      description: string;
      observation: string;
      correct: number;
    };

    type QuizItemsProps = {
      id: number;
      statement: string;
      options: QuizItemOptionsProps[];
    };

    type QuizCategoryData = {
      title: string;
      author: string;
      description: string;
      subject: string;
      ability: string;
      tags: string[];
      content: string;
      url_media: string;
      url_cover_media: string;
      quiz: {
        questions_amount: number;
        items: QuizItemsProps[];
      };
    };
  }

  type LibraryCategoryResponseData =
    | LibraryCategoryData.AudioCategory.AudioCategoryData
    | LibraryCategoryData.DocumentCategory.DocumentCategoryData
    | LibraryCategoryData.EbookCategory.EbookCategoryData
    | LibraryCategoryData.QuizCategory.QuizCategoryData
    | LibraryCategoryData.TextCategory.TextCategoryData
    | LibraryCategoryData.GameCategory.GameCategoryData;
}

type LibraryListResponseData = {
  id: string;
  name: string;
};

type LibrarySearchCompleteListResponseData = {
  id: number;
  name: string;
  category: string;
  description: string;
  url_cover_media: string;
};

type LibraryCategoryMediasListResponseData = {
  id: number;
  name: string;
  category: string;
  description: string;
  url_cover_media: string;
};

type LibraryCategoryList = {
  id: string;
  name: string;
  medias: LibraryCategoryMediasListResponseData[];
};

type LibraryCategoryListResponseData = LibraryCategoryList[];

type LibraryCategoryListCompleteData = {
  data: LibraryCategoryMediasListResponseData[];
  pagination: {
    rowsPerPage: number;
    page: number;
    rowsNumber: number;
  };
};

type LibraryCategoryFilterList = {
  id: number;
  name: string;
};

type LibraryCategoryFilterListResponseData = {
  subjects: LibraryCategoryFilterList[];
};

type LibraryFilterListData = {
  libraryCategoryFilterName: string;
  libraryCategoryFilterValue: string;
};
