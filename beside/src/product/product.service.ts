import { Injectable } from '@nestjs/common'; // Assuming you're using NestJS
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBarangDto } from './dto/create_barang.dto'; // Adjust the import path as necessary
import { M_barang } from './entities/m_barang.entity'; // Adjust the import path as necessary

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(M_barang)
        private readonly barangRepository: Repository<M_barang>,
    ) { }

    async filters(kode: number): Promise<any> {
        try {
            let res = null;
            if(kode == 0){
                res = await this.barangRepository.find(); 
            }else{
                res = await this.barangRepository.findBy({
                    kode: String(kode)
                });
            }

            // Return a success response with the saved entity
            return {
                status: 200,
                message: 'Successfully created',
                data: res,
            };
        } catch (error) {
            // Handle errors and return an error response
            console.error('Error creating Barang:', error);
            return {
                status: 500,
                message: 'Failed to create Barang',
                error: error.message,
            };
        }
    }

    async create(barangDto: CreateBarangDto): Promise<any> {
        try {
            console.log(barangDto);
            
            // Create a new instance of the Barang entity from DTO
            const newBarang = this.barangRepository.create(barangDto);

            // Save the new entity to the database
            const savedBarang = await this.barangRepository.save(newBarang);

            // Return a success response with the saved entity
            return {
                status: 200,
                message: 'Successfully created',
                data: savedBarang,
            };
        } catch (error) {
            // Handle errors and return an error response
            console.error('Error creating Barang:', error);
            return {
                status: 500,
                message: 'Failed to create Barang',
                error: error.message,
            };
        }
    }
 
    async update(id: number, barangDto: CreateBarangDto): Promise<any> {
        try {
            console.log('Update method called with:', id, barangDto);

            // Find the existing entity by ID using FindOneOptions
            const existingBarang = await this.barangRepository.findOne({
                where: { id: id }
            });

            if (!existingBarang) {
                return {
                    status: 404,
                    message: 'Barang not found',
                };
            }

            // Update the existing entity with new data
            this.barangRepository.merge(existingBarang, barangDto);

            // Save the updated entity to the database
            const updatedBarang = await this.barangRepository.save(existingBarang);

            // Return a success response with the updated entity
            return {
                status: 200,
                message: 'Successfully updated',
                data: updatedBarang,
            };
        } catch (error) {
            // Handle errors and return an error response
            console.error('Error updating Barang:', error);
            return {
                status: 500,
                message: 'Failed to update Barang',
                error: error.message,
            };
        }
    }

    async delete(id: number): Promise<any> {
        try {
            console.log('Delete method called with ID:', id);

            // Attempt to delete the entity by ID
            const result = await this.barangRepository.delete(id);

            // Check if any rows were affected
            if (result.affected === 0) {
                return {
                    status: 404,
                    message: 'Barang not found',
                };
            }

            // Return a success response
            return {
                status: 200,
                message: 'Successfully deleted',
            };
        } catch (error) {
            // Handle errors and return an error response
            console.error('Error deleting Barang:', error);
            return {
                status: 500,
                message: 'Failed to delete Barang',
                error: error.message,
            };
        }
    }


}
