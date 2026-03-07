import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  getHealth() {
    return this.appService.getHealth();
  }

  @Get("roadmap")
  getRoadmap() {
    return this.appService.getRoadmap();
  }

  @Get("specialties")
  getSpecialties() {
    return this.appService.getSpecialties();
  }

  @Get("slots")
  getSlots(@Query("specialtyId") specialtyId?: string) {
    return this.appService.getSlots(specialtyId);
  }

  @Get("appointment-requests")
  getAppointmentRequests() {
    return this.appService.listAppointmentRequests();
  }

  @Post("appointment-requests")
  createAppointmentRequest(
    @Body()
    body: {
      patientName: string;
      patientDocument: string;
      specialtyId: string;
      slotId: string;
      reason: string;
    },
  ) {
    return this.appService.createAppointmentRequest(body);
  }
}
