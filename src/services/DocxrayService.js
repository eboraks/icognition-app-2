const DocxrayService = {
    getCitationsData() {
        return [
            {
                id: '1000',
                color: 'rgba(0,170,255,.15)',
                char_count: 5,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 1.',
                start_highlight: 5
            },
            {
                id: '1001',
                color: 'rgba(0,170,255,.15)',
                char_count: 15,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 2.',
                start_highlight: 5
            },
            {
                id: '1002',
                color: 'rgba(0,170,255,.15)',
                char_count: 25,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 3.',
                start_highlight: 5
            },
            {
                id: '1003',
                color: 'rgba(0,170,255,.15)',
                char_count: 35,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 4.',
                start_highlight: 5
            }
        ];
    },

    getHighlightsData() {
        return [
            {
                id: '1000',
                color: 'rgba(0,170,255,.15)',
                char_count: 5,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 1.',
                start_highlight: 5
            },
            {
                id: '1001',
                color: 'rgba(0,170,255,.15)',
                char_count: 15,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 2.',
                start_highlight: 5
            },
            {
                id: '1002',
                color: 'rgba(0,170,255,.15)',
                char_count: 25,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 3.',
                start_highlight: 5
            },
            {
                id: '1003',
                color: 'rgba(0,170,255,.15)',
                char_count: 35,
                highlight: 'Lorem ipsum dolar sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                note: 'Here is a note for this sentence 4.',
                start_highlight: 5
            }
        ];
    },

    getHighlights() {
        return Promise.resolve(this.getHighlightsData());
    },
    getCitations() {
        return Promise.resolve(this.getCitationsData());
    }
};

export default DocxrayService