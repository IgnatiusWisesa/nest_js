import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpCode, HttpStatus, UseFilters, UsePipes } from '@nestjs/common';
import { JobsService } from './jobs.service'
import { JobDTO } from './dtos/job.dto'
import { Job } from './interfaces/jobs.interface'

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobService: JobsService) {}

    @Get(`:id`)
    finds(@Param('id') id): Promise<Job> {
        return this.jobService.finds(id)
                .then((res) => {
                    if( res ) return res
                    throw new HttpException('Job not found', HttpStatus.NOT_FOUND)
                })
                .catch(() => { throw new HttpException('Job not found', HttpStatus.NOT_FOUND) })
    }

    @Post()
    create(@Body() job: JobDTO): Promise<Job> {
        return this.jobService.create(job);
    }


    @Put(`:id`)
    update(@Param('id') id, @Body() job: JobDTO): Promise<Job> {
        return this.jobService.update(id, job)
    }

    @Delete(`:id`)
    delete(@Param('id') id): Promise<Job> {
        return this.jobService.delete(id)
    }

}