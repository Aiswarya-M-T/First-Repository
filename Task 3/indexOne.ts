import { studPerformance } from "./index"
export namespace detailsOfStudent {
    export var fetchGrade = (rank: number): string => {
        var result = '';
        switch (true) {
            case (rank <= 10):
                result = 'A+';
                break;
            case (rank <= 15):
                result = 'A';
                break;
            case (rank <= 25):
                result = 'B';
                break;
            case (rank > 25):
                result = 'C';
                break;
        }
        return result;
    }
    var grades: string[] = ['A+', 'A', 'B', 'C']
    export var studentPerformance = (grade: string, rank: number): string => {
        grade = fetchGrade(rank)
        var performance = ''
        grades.map((element: string, index: number) => {
            if (grade == element) {
                performance = studPerformance[index]
            }
        })
        return performance
    }
}