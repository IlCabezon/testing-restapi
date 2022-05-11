const app = require("../src/app")
const request = require("supertest")
/* import app from '../src/app.js'
import request from "supertest" */

const STATUS_OK = 200
const STATUS_NOT_FOUND = 404
const STATUS_ERROR = 400

const PATH = '/api';
const TASKS_PATH = "/api/tasks"
const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_DELETE = 'DELETE';



describe(`${METHOD_GET}< ${PATH}`, ()=>{
    test('Should response with a 200 status code', async() => { 
        const response = await request(app).get(PATH).send()
    
        expect(response.statusCode).toBe(STATUS_OK) 
     })
})

describe(`${METHOD_GET} ${TASKS_PATH}`,()=>{
    test("Should response with a 200 status code",async()=>{
        const response = await request(app).get(TASKS_PATH).send()

        expect(response.statusCode).toBe(STATUS_OK)
    })
    test("Should response with an array",async()=>{
        const response = await request(app).get(TASKS_PATH).send()

        //expect(response.body).toEqual(expect.arrayContaining([]))
        expect(response.body).toBeInstanceOf(Object)
    })
    test("Should response with an array",async()=>{
        const response = await request(app).get(TASKS_PATH).send()

        expect(response.body).toEqual(expect.objectContaining({
            message:"Task fetched succesfully",
            tasks : []
        }))
        //expect(response.body).toBeInstanceOf(Array)
    })
})

describe(`${METHOD_POST} ${TASKS_PATH}`, () => { 
    describe("given a title and description",()=>{
        const newTask = {
            title : "Test Task",
            description : "Test Description"
        }

        test("Should respond with a 200 status code",async()=>{
            const response = await request(app).post(TASKS_PATH).send(newTask)
    
            expect(response.statusCode).toBe(200)
        })
       
        test("Should have a application/json in header",async()=>{
            const response = await request(app).post(TASKS_PATH).send(newTask)
    
            //expect(response.header["content-type"]).toBe("application/json")
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
        })
       
        test("Should respond with an Task Id, Task Title and Task Description",async()=>{
            const response = await request(app).post(TASKS_PATH).send(newTask)
            expect(response.body.id).toBeDefined()
            
        })

        test("Should have Task Title and Task Description",async()=>{
            const response = await request(app).post(TASKS_PATH).send(newTask)

            expect(response.body).toEqual(expect.objectContaining(newTask))
        })
    })
   describe("When title or description is missing",()=>{
       test("Should repond with a 400 status code",async()=>{
           const fields = [{},{title:'Test Task'},{description:"Description Task"}]

           for(let e of fields){
            const response = await request(app).post(TASKS_PATH).send(e)
    
            expect(response.statusCode).toBe(STATUS_ERROR)
           }
       })
   }) 
})